const DocumentLearn = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      <iframe
        src="/index1.html"  // 你可以根据需要修改文件路径
        title="Full Screen Iframe"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ display: 'block' }}  // 移除 iframe 外部的间距
      />
    </div>
  );
};

export default DocumentLearn;
