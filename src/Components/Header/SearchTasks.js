import React from 'react';
import { Container, FormControl, Button, InputGroup } from 'react-bootstrap';
import background from '../../images/backgroud.jpg';
const SearchTasks = () => {
    return (
        <div>
            <div style={{background:`linear-gradient(to bottom,
                 rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)),
                 url(${background}) `, height:'700px'}}>
                    

                  <Container style={{textAlign:'center',padding:'30px 0'}}>
                 <h2 style={{margin:'20px'}}>  I GROW BY HELPING PEOPLE IN NEED </h2>
                 <InputGroup>

                 <FormControl
                 className="m-auto navBarSearchForm pl-3"
                 placeholder="Search"
                 >
                 </FormControl>
                  
                 <Button variant="primary" >Search</Button>
                
                 </InputGroup>
                 
                  </Container>
                
                 </div>
                 
        </div>
    );
};

export default SearchTasks;