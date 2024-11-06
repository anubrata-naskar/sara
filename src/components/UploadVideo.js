import React, { useState, useEffect } from 'react'

export default function UploadVideo() {
     
  return (
    <div>
        <form action="http://localhost/api/uploadvideo.php" method="post" enctype="multipart/form-data">
        Select file to upload:
        <input type="file" name="file"/><br/>
        <input type="submit" value="Upload file" name="submit"/>
    </form>
    </div>
  )
}
