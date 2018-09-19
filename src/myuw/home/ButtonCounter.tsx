import * as React from 'react';
import {
  Button, Card, CardBody, CardSubtitle, CardText, CardTitle
} from 'reactstrap';

export interface IProps {
  title: string;
  subtitle: string;
}

interface IState {
  count: number;
}

class ButtonCounter extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      count: 0,
    };
    this.incrementCount = this.incrementCount.bind(this);
  }

  public incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  public render() {

    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardSubtitle>{this.props.subtitle}</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button onClick={this.incrementCount}>You clicked me {this.state.count} times.</Button>
          </CardBody>
        </Card>
      </div>
    );
  }

};

export default ButtonCounter;
