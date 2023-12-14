import { useEffect, useState } from "react";
import { getTopics } from "../../apis/api";
import "../styles/Topics.css";
import TopicCard from "../TopicCard";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Topics = () => {
  const { topic_name } = useParams();
  const [topics, setTopics] = useState([]);

  const [topicToDisplay, setTopicToDisplay] = useState("");

  useEffect(() => {
    getTopics().then((response) => {
      console.log(response);
      setTopics(response);
    });
  }, []);

  return (
    <section className="topic-main">
      {topics.map((topic) => {
        return (
          <Link to={`/topics/${topic.slug}`}>
            <TopicCard topic={topic} />
          </Link>
        );
      })}
    </section>
  );
};

export default Topics;
