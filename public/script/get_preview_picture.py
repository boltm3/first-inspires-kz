import json
import os
import requests
import subprocess
import re

def extract_download_links(file_path):
    if not os.path.exists(file_path):
        print(f"Error: {file_path} not found. Please check the file location.")
        return []
    
    with open(file_path, "r", encoding="utf-8") as file:
        data = json.load(file)
    
    # 提取所有 .pdf 格式的 download_link
    links = [manual.get("download_link") for season in data for manual in season.get("manuals", []) if manual.get("download_link", "").endswith(".pdf")]
    return links

def extract_year_from_url(url):
    match = re.search(r"(20\d{2})", url)
    return match.group(1) if match else "unknown"

def download_pdf(url, save_path):
    response = requests.get(url, stream=True)
    if response.status_code == 200:
        with open(save_path, "wb") as file:
            for chunk in response.iter_content(1024):
                file.write(chunk)
        print(f"Downloaded: {save_path}")
    else:
        print(f"Failed to download: {url}")

def convert_pdf_to_image(pdf_path, image_path):
    gs_command = [
        "gswin64c", "-dNOPAUSE", "-sDEVICE=png16m", "-r150", "-dFirstPage=1", "-dLastPage=1",
        f"-sOutputFile={image_path}", pdf_path, "-dBATCH"
    ]
    try:
        subprocess.run(gs_command, check=True)
        print(f"Converted: {image_path}")
    except subprocess.CalledProcessError as e:
        print(f"Ghostscript conversion failed: {e}")

# 获取当前脚本所在目录
current_dir = os.path.dirname(os.path.abspath(__file__))
file_path = os.path.join(current_dir, "manualBooks.json")
pdf_dir = os.path.join(current_dir, "pdfs")
image_dir = os.path.join(current_dir, "images")

# 确保目录存在
os.makedirs(pdf_dir, exist_ok=True)
os.makedirs(image_dir, exist_ok=True)

print(f"Trying to open: {file_path}")
download_links = extract_download_links(file_path)

# 下载所有 PDF 并转换第一页为图片
for url in download_links:
    pdf_name = os.path.basename(url)
    year = extract_year_from_url(url)
    pdf_path = os.path.join(pdf_dir, pdf_name)
    image_path = os.path.join(image_dir, f"{pdf_name.replace('.pdf', '')}_{year}.png")
    
    download_pdf(url, pdf_path)
    convert_pdf_to_image(pdf_path, image_path)
