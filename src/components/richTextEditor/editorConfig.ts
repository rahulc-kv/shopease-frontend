const EditorConfig = {
    modules: {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5] }],
          ['bold', 'italic', 'underline'],
          [{ size: ['0.75em', '1em', '1.5em', '2.5em'] }],
          [{ color: [] }, { background: [] }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ indent: '-1' }, { indent: '+1' }],
          [{ align: [] }],
          ['clean']
        ]
      },
      clipboard: {
        matchVisual: false
      }
    }
  };
  
  export default EditorConfig;
  