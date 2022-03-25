import Head from "next/head";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import Navbar from "../components/Navbar";

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Collapsible from 'react-collapsible';
import { Button } from 'react-responsive-button';
import 'react-responsive-button/dist/index.css';



export default function Index() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
  <div>
      <div>
        <Navbar />
      </div>
    <div>
      <Button href="/api/auth/login" >login</Button>    

    </div>
      <div>
      <Carousel>
                  <div>
                      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172224/1.png" alt="image1"/>
  
                  </div>
                  <div>
                      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172225/2.png" alt="image5"/>
  
                  </div>
              </Carousel>
      </div>
      <Collapsible trigger="button 1">
      <p>
        This is the collapsible content. It can be any element or React
        component you like.
      </p>
    </Collapsible>
    <Collapsible trigger="button 2">
      <p>
        This is the collapsible content. It can be any element or React
        component you like.
      </p>
    </Collapsible>    
      </div>
    );
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
    <div>
      <Button href="/api/auth/login" >login</Button>    

    </div>
      <div>
      <Carousel>
                  <div>
                      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172224/1.png" alt="image1"/>
  
                  </div>
                  <div>
                      <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211213172225/2.png" alt="image5"/>
  
                  </div>
              </Carousel>
      </div>
      <Collapsible  trigger="button 1">
      <p>
        This is the collapsible content. It can be any element or React
        component you like.
      </p>
    </Collapsible>
    <Collapsible trigger="button 2">
      <p>
        This is the collapsible content. It can be any element or React
        component you like.
      </p>
    </Collapsible>    
    </div>
    
  );
}
