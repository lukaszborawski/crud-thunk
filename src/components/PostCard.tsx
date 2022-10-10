import styled from 'styled-components';

interface PostProfile {
  id: number;
  title: string;
}

const PostCard = ({ id, title }: PostProfile) => {
  return (
      <Wrapper>
          <Value>{title}</Value>
      </Wrapper>
    
  )
}

export default PostCard;

const Wrapper = styled.div`
  width: 350px;
  padding: 15px 10px;
  color: black;
  border: 1px solid black;
`;

const Value = styled.span`
`;

