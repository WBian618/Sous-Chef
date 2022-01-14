import React, { useState } from 'react'

function PostUpload() {
    const [selectedImage, setSelectedImage] = useState(null)
    return (
        <div>
            <h1>Share Your Images!</h1>
            {selectedImage && (
                <div>
                    <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                    <br />
                    <button onClick={() => setSelectedImage(null)}>Remove</button>
                </div>
            )}
            <input
                type="file"
                name="myImage"
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                }}
            />
        </div>
        
    )
}

export default PostUpload

