import classes from './MeetupDetail.module.css';

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <h1>Welcome to Meetup Detail</h1>
      <img className={classes.image} src={props.image} alt={props.title} />
      <h1 className={classes.title}>{props.title}</h1>
      <address className={classes.address}>{props.address}</address>
      <p className={classes.description}>{props.description}</p>
    </section>
  );
}

export default MeetupDetail;
