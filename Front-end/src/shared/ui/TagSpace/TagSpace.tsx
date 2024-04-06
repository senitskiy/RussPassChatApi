import { Tag } from 'antd';
import './TagSpace.scss';

type TagSpaceProps = {
  tags: string[];
  checkedTags: string[];
  handleClickTag?: (tag: string) => void;
};

export const TagSpace = ({ tags, checkedTags, handleClickTag }: TagSpaceProps) => {
  return (
    <div className='tag-space'>
      {tags.map((tag) => (
        <Tag
          tabIndex={0}
          className='concern-tag'
          key={tag}
          onClick={() => handleClickTag?.(tag)}
          color={checkedTags.includes(tag) ? 'processing' : ''}
        >
          {tag}
        </Tag>
      ))}
    </div>
  );
};
