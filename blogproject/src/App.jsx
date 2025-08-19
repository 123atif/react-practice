import './index.css'
// import { Editor } from '@tinymce/tinymce-react';
function App() {
  const value = import.meta.env.VITE_API_URL
  console.log(value)

  return (

    <>
      {/* <div className="w-fit m-auto">
        <Editor
          apiKey='wgv8vldb5r0qzhxyqwi330hzjb4efc18jwovfoax5rx9e7ry'
          init={{
            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
          }}
          initialValue="Welcome to TinyMCE!"
        />
      </div> */}
    </>
  )
}

export default App
