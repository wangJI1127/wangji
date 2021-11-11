

const BlogPosts = {
    '1': {
        title: 'First Blog Post',
        description: 'Lorem ipsum dolor sit amet, consectetur adip.'
    },
    '2': {
        title: 'Second Blog Post',
        description: 'Hello React Router v6'
    }
};

export const PostLists = () => {
    return (
        <ul>
          {Object.entries(BlogPosts).map(([slug, { title }]) => (
            <li key={slug}>
              <h3>{title}</h3>
            </li>
          ))}
        </ul>
      );

}