import { Button } from "antd";
import JoditEditor from "jodit-react";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useAddDisclaimerMutation, useGetAboutQuery } from "../../redux/features/setting/settingApi";

const About = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [showEditor, setShowEditor] = useState(false);
  const {data: aboutData, refetch} = useGetAboutQuery(undefined)
  const [addDisclaimer] = useAddDisclaimerMutation()


    
     useEffect(() => {
      if (aboutData?.content) {
        setContent(aboutData.content);
      }
    }, [aboutData]);


  const handleSubmit = async () => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = content;
    const plainText = tempDiv.innerText.trim();

    if (!plainText) {
      toast.error("Content cannot be empty");
      return;
    }

     try {
      await addDisclaimer({
        type: "about",
        content,
      }).unwrap();

      toast.success("Saved successfully");
      refetch();
      setShowEditor(!showEditor)
    } catch (err) {      
      toast.error((err as any)?.data?.message);
    }
  };
  const config = React.useMemo(
    () => ({
      // theme: "dark",
      showCharsCounter: false,
      showWordsCounter: false,
      toolbarAdaptive: true,
      toolbarSticky: false,
      enableDragAndDropFileToEditor: false,
      allowResizeX: false,
      allowResizeY: false,
      statusbar: false,
      buttons: [
        "source",
        "|",
        "bold",
        "italic",
        "underline",
        "|",
        "ul",
        "ol",
        "|",
        "font",
        "fontsize",
        "brush",
        "paragraph",
        "|",
        "image",
        "table",
        "link",
        "|",
        "left",
        "center",
        "right",
        "justify",
        "|",
        "undo",
        "redo",
        "|",
        "hr",
        "eraser",
        "fullsize",
      ],
      placeholder: "Start typing...",
      useSearch: false,
      spellcheck: false,
      iframe: false,
      askBeforePasteHTML: false,
      askBeforePasteFromWord: false,
      toolbarButtonSize: "small",
      readonly: false,
      style: {
        height: "60vh",
        background: "linear-gradient(91.95deg, rgba(2, 115, 72, 0.1) -17.37%, rgba(3, 47, 30, 0.4) 101.16%)",        
      },
      observer: { timeout: 100 },
    }),
    []
  );

  return (
    <div className="contentBg h-full p-4 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl text-textColor font-semibold">About</h1>
        <Button
          onClick={() => setShowEditor(!showEditor)}
          type="primary"
          size="large"
          style={{
            width: 150,
            borderRadius: 20,
            marginTop: 20,
          }}
        >
          Edit
        </Button>
      </div>

      {/* -------------- Editor ---------------- */}

      {showEditor ? (
        <div className="">
          <JoditEditor          
            ref={editor}
            value={content}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => setContent(newContent)}
          />
          <div className="flex items-center justify-end gap-4">
            <Button
              onClick={() => setShowEditor(!showEditor)}              
              variant="outlined"              
              size="large"
              style={{
                width: 150,
                height: 50,
                borderRadius: 20,
                border: "1.5px solid #8B4E2E",
                marginTop: 20,
                color: "#8B4E2E",
                fontWeight: 600,
                background: "transparent"
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              type="primary"
              size="large"
              style={{
                width: 150,
                height: 50,
                borderRadius: 20,
                marginTop: 20,
              }}
            >
              Update
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              border: "1px solid #989898",
              borderRadius: 20,
              padding: "20px",
              minHeight: "600px",
              maxHeight: "600px",
              marginTop: "20px",
              color: "rgba(255,255,255,0.8)",
              overflow: "auto",
              background: "transparent",
            }}
            dangerouslySetInnerHTML={{ __html: content || "No content yet." }}
          />
        </div>
      )}
    </div>
  );
};

export default About;

