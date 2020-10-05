import React from "react";
import { Card, Media, Content, Heading, Button } from 'react-bulma-components';
import placeholder from '../resources/placeholder.png'

interface ArticleProps {
  imgSrc: string | null;
  title: string | null;
  publishDate: string;
  content: string | null;
  articleLink: string;
}

const ArticleCard = ({ imgSrc, title, publishDate, content, articleLink }: ArticleProps) => {
  const ArticleLinkComponent = ({children}) => (<a target="_blank" href={articleLink}>{children}</a>)

  return (
    <Card>
      <Card.Image size="16by9" src={imgSrc ? imgSrc : placeholder}/>
      <Card.Content>
        <Media>
          <Media.Item>
            <Heading size={4}>{title}</Heading>
            <Heading subtitle size={6}>{new Date(publishDate).toLocaleString()}</Heading>
          </Media.Item>
        </Media>
        <Content className={"is-hidden-mobile"}>
          {content}
        </Content>
        <Button renderAs={ArticleLinkComponent}>Read More</Button>
      </Card.Content>
    </Card>
  )
}

export default ArticleCard
