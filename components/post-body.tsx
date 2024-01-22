import ReactMarkdown from 'react-markdown';
import markdownStyles from './markdown-styles.module.css';
import Prism from 'react-syntax-highlighter/dist/cjs/prism';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Image from 'next/image';

type Props = {
  content: string;
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <ReactMarkdown 
        className={markdownStyles['markdown']} 
        components={{
          // ... other components
          img: ({ node, ...props }) => {
            // Ensure that `src` is a string
            if (typeof props.src === 'string') {
              // Parse width and height to ensure they are numbers or `${number}`
              const width = typeof props.width === 'number' ? props.width : undefined;
              const height = typeof props.height === 'number' ? props.height : undefined;

              return (
                <Image
                  className="my-4 mx-auto"
                  alt={props.alt || 'Image'}
                  layout="responsive"
                  src={props.src}
                  width={width} // Use parsed width
                  height={height} // Use parsed height
                />
              );
            }
            // Handle undefined src
            return null;
          },
          // ... other components
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default PostBody;
