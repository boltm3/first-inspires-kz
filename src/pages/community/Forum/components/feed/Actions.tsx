import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faShare } from '@fortawesome/free-solid-svg-icons'

const style = {
  icon: 'h-4 w-4',
  iconContainer: 'flex items-center space-x-1 text-[#818384]',
  wrapper: 'flex items-center space-x-4 pt-2 ',
}

// Define the type for the props
interface ActionsProps {
  comments: number;
}

const Actions: React.FC<ActionsProps> = ({ comments }) => { // Use typed props
  return (
    <div className={style.wrapper}>
      <div className={style.iconContainer}>
        <FontAwesomeIcon icon={faComment} className={style.icon} />
        <span className='text-xs'>{comments} Comments</span>
      </div>

      <div className={style.iconContainer}>
        <FontAwesomeIcon icon={faShare} className={style.icon} />
        <span className='text-xs'>Share</span>
      </div>
    </div>
  )
}

export default Actions
