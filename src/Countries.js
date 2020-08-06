import React from "react";
import { useQuery, gql } from "@apollo/client";
import { ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";
export default function Countries() {
  const FETCH_COUNTRIES = gql`
    query Country($offset: Int, $limit: Int){
      Country(offset: $offset, first: $limit){
        name
        flag {
          svgFile
        }
      }
    }
  `;
  const { loading, error, data, fetchMore } = useQuery(FETCH_COUNTRIES, 
    { 
      variables: {
        offset: 0,
        limit: 6
      },
      fetchPolicy: "cache-and-network",
      pollInterval: 500,
    }
  );
  if (loading) return <p className="text-center">Loading...</p>;

  if (error) return <p className="text-center"> Error: {error} :( </p>;
    
  return data.Country.map( (country) => (
    <div className="pt-3" key={country.name}>
      <Row>
        <Col></Col>
        <Col>
          <ListGroup>
            <ListGroup.Item> 
              <img
                width={25}
                height={25}
                className="mr-3"
                src= { country.flag.svgFile }
                alt="Generic placeholder"
              />
              {country.name}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col></Col>
      </Row>
    </div>
    
  ));

}
