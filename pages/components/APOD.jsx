import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/APOD.module.css';

const APOD = () => {
  const [pic, setPic] = useState("");
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [date, setDate] = useState("");


	const fetchData = async () => {	
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=g2SE3zMqKGOohHR8XgRuxx0j2p6xzrKfcGYQE3fn`)
    .then((response) => {
      var fetchedData = response.data;
      setDate(fetchedData.date);
      setPic(fetchedData.hdurl);
      setTitle(fetchedData.title);
      setDesc(fetchedData.explanation);
    })
    .catch((err)=>{
      console.log(err);
    })

	};

  useEffect(() => {
    fetchData();
  },[]);
  // localStorage.clear();
	return (
		<div className={styles.container}>
      <div className={styles.left}>
        <img src={pic} alt="Pic Not Generated" />
      </div>

      <div className={styles.right}>
        <h1>{title}</h1>
        <h3>{date}</h3>
        <p>{desc}</p>

        <button>
          <Link href={pic}  passHref>
                <a target="_blank">Full Size Image</a>
          </Link>
          
        </button>
      </div>
		</div>
	);
}    

export default APOD;