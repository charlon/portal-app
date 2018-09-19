import * as React from 'react';
import {
  Card, CardBody, CardSubtitle, CardText, CardTitle
} from 'reactstrap';

export interface IProps {
  wait: number;
}

interface IState {
  hidden: string;
}

class ExampleCard extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      hidden: 'invisible',
    };
  }

  public showComponent() {
    this.setState({
      hidden : ''
    });
  }

  public componentWillMount() {
    // https://stackoverflow.com/questions/30803440/delayed-rendering-of-react-components
    setTimeout(() => {
        this.showComponent();
    }, this.props.wait);
  }

  public render() {
    return (
      <div className={this.state.hidden}>
        <Card className="shadow-sm">
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

}

export default ExampleCard;
