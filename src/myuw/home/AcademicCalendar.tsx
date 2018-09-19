import * as React from 'react';
import {
  Card, CardBody,
  CardSubtitle, CardTitle
} from 'reactstrap';

export interface IProps {
  compiler: string;
  framework: string;
}

interface IState {
  loading: boolean;
  events : [];
}

class AcademicCalendar extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      events: [],
      loading: true
    };
  }

  public componentDidMount() {

    // use native fetch to consume local json api
    fetch('http://localhost:8000/api/calendar.json')
    .then(results => results.json())
    .then(data => {

      const eventsList = data.map((event: any) => {
        return(
          <li key={event.eventID}>
            {event.title}<br/>{event.startDateTime} - {event.endDateTime}
          </li>
        )
      })

      this.setState({
        events: eventsList,
        loading : false
      });

      // console.log(this.state.loading);
      // console.log(data);

    })
    .catch(error => {
      return ( <div>Error... {error}</div>)
    });

  }

  public render() {

    let content;

    if (this.state.loading) {
      content = <div>Loading...</div>;
    } else {
      content =
      <ul>
        {this.state.events}
      </ul>
    }

    return (
      <div>
        <Card className="shadow-sm">
          <CardBody>
            <CardTitle>Academic Calender</CardTitle>
            <CardSubtitle>Hello from {this.props.compiler} and {this.props.framework}!</CardSubtitle>
            <div>{content}</div>
          </CardBody>
        </Card>
      </div>
    );

  }

}

export default AcademicCalendar;
