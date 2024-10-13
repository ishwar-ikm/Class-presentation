import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import Input from "../components/Input";
import { Loader, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ShowEntryPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:3000/api/auth/entry");
        const data = await response.json();

        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
			overflow-hidden'
    >
      {data.length > 0 ? (
        data.map((entry) => (
          <div className='p-2 m-6' key={entry._id}>
            <h2 className='text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text'>
              Name: {entry.name}<br></br>
              Email: {entry.email}
            </h2>
          </div>
        ))
      ) : (
        <div className='p-2 m-6'>
          <h2 className='text-2xl font-bold text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text'>
            No data to show
          </h2>
        </div>
      )}
      <div className='px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center'>
        <p className='text-sm text-gray-400'>
          <Link to={"/"} className='text-green-400 hover:underline'>
            Enter more entries.
          </Link>
        </p>
      </div>
    </motion.div>
  );
}

export default ShowEntryPage
