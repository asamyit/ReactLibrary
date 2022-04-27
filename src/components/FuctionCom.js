import React,{useEffect, useState} from 'react'
import {Card,Container,Row,Col} from 'react-bootstrap';
import axios from 'axios';
import Loading from './Loading';



export default function FuctionCom() {
    const [Books,setBooks] = useState([])
    const [Load,setLoad] = useState(false)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/').then((data)=>{
            setBooks(data.data)
            setLoad(true)
        })
    },[])

  return (
    <div>
        <Container>
            {Load 
            ?  
            <Row>
                {Books.map((book)=>(
                    <Col key={book.id} >
                        <Card style={{ width: '18rem' ,margin:'0.3rem'}}>
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>{book.body}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            :  <Loading />
            }
        </Container>

    </div>
  )
}
