import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import{ListGroup,ListGroupItem} from'reactstrap'
    

class Dishdetail extends Component {
       
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>    
            );
        else
            return(
                <div></div>
            );
    }


    renderDishComment(dish) {
      if (dish != null)
          return(
            <div>
              <h4>Commments</h4>
               {dish.comments.map(fun)}
            </div>
         
          );
      else
          return(
              <div></div>
          );
          function fun(n){
            return (
              <ListGroup  key={n.id}>
              <ListGroupItem className="border-0">{n.comment}</ListGroupItem>
              <ListGroupItem className="border-0">--{n.author}, {datefun(n.date)}</ListGroupItem>
            </ListGroup>
              )

              function datefun(n)
              {
                  var a=new Date(n.toString())
                  return a.toDateString()
              }
          }
  }

    render() {
        
        return (
                <div className="row">
                <div  className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.dishselect)}
                </div>
               <div  className="col-12 col-md-5 m-1">
               {this.renderDishComment(this.props.dishselect)}
               </div>
               </div>
        );
    }
    



}
export default Dishdetail;