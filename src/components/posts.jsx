import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddPost  , DeletePost , UpdatePost } from "./SlidePost";
const Posts = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // Edite
  const [IsTrue, setIsTrue] = useState(false)
  const [id, setId] = useState(null)

  const [Updatetitle, setUpdateTitle] = useState("");
  const [Updatedesc, setUpdateDesc] = useState("");

  const dispatch = useDispatch()
  const {data} = useSelector((state)=>state.user)
  const handel = (e)=>{
    e.preventDefault()
    const input = document.querySelectorAll("input[type='text']")
    
      if(input[0].value && input[1].value){
        dispatch(AddPost({ id: data.length + 1, title, desc }))
        setTitle("")
        setDesc("")
      }
  }
  return (
    <>
      <form onSubmit={handel} className="Posts">
        <input
          value={title}
          type="text"
          placeholder="Enter Post title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          value={desc}
          type="text"
          placeholder="Enter Post Desc"
          onChange={(e) => setDesc(e.target.value)}
        />

        <input type="submit" value="Add Post" />
      </form>

      {data.length > 0 ?
        (data.map((e, index) => (
          <div className="preview" key={index}>
            <h2>{e.title}</h2>
            <h3>{e.desc}</h3>
            <div className="btn">
              <button onClick={() => {
                setIsTrue(true)
                setId(e.id)
              }}>Edite</button>
              <button onClick={_=> dispatch(DeletePost({id :e.id}))}>Delete</button>
            </div>



            {IsTrue && id == e.id && (
              <div className="Posts">
                <input onChange={(e)=>setUpdateTitle(e.target.value)} type="text" placeholder="Enter Your Edite Title"/>
                <input onChange={(e)=>setUpdateDesc(e.target.value)} type="text" placeholder="Enter Your Edite Description" />
                <button
                  onClick={() => {
                    dispatch(UpdatePost({ id: e.id, title: Updatetitle, desc: Updatedesc }))
                    setIsTrue(false)
                  }}
                  className="custom"
                >Update</button>
              </div>
            )}



          </div>
        )))
        : (<h2 className="not">this Data Not Found</h2>)}
    </>
  );
};

export default Posts;
