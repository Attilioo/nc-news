import './styles/TopicCard.css'

const TopicCard = ({ topic }) => {

    
  return (
    <div className="topic-card">
      <p>{topic.slug}</p>
    </div>
  );
};

export default TopicCard;
