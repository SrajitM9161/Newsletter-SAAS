"use client"
import EmailEditor, { EditorRef, EmailEditorProps } from "react-email-editor";
import { useState, useRef, useEffect } from "react";
import { DefaultJsonData } from "@/assests/mail/default";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { saveEmail } from "@/actions/save.email";
import { sendEmail } from "@/shared/utils/email.sender";
import toast from "react-hot-toast";
import { GetEmailDetails } from "@/actions/get.emai-details"

interface EmaileditorProps {
  subjectTitle: string;
}

const Emaileditor: React.FC<EmaileditorProps> = ({ subjectTitle }) => {
  const [loading, setLoading] = useState(true);
  const [jsonData, setJsonData] = useState<any | null>(DefaultJsonData);
  const { user } = useClerk();
  const emailEditorRef = useRef<EditorRef>(null);
  const router = useRouter();

  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;
    unlayer?.exportHtml(async (data) => {
      const { design, html } = data;
      setJsonData(design);
      await sendEmail({
        userEmail: ["srajitmishra121@gmail.com"], 
        subject: subjectTitle,
        content: html,
      }).then((res) => {
        toast.success("Email sent successfully!");
        router.push("/dashboard/write");
      });
    });
  };

  const onReady: EmailEditorProps["onReady"] = () => {
    const unlayer: any = emailEditorRef.current?.editor;
    unlayer.loadDesign(jsonData);
  };

  const saveDraft = () => {
    const unlayer = emailEditorRef.current?.editor;
    unlayer?.exportHtml(async (data) => {
      const { design } = data;
      await saveEmail({
        title: subjectTitle,
        content: JSON.stringify(design),
        newsLetterOwnerId: user?.id!,
      }).then((res: any) => {
        toast.success(res.message);
        router.push("/dashboard/write");
      });
    });
  };

  const getEmailDetails = async () => {
    await GetEmailDetails({
      title: subjectTitle,
      newsLetterOwnerId: user?.id!,
    }).then((res: any) => {
      if (res) {
        setJsonData(JSON.parse(res?.content));
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    getEmailDetails();
  }, [user]);

  return (
    <>
      {!loading && (
        <div className="w-full h-[90vh] relative">
          <EmailEditor minHeight={"80vh"} ref={emailEditorRef} onReady={onReady} />
          <div className="absolute bottom-0 flex items-center justify-end gap-4 right-0 w-full border-t p-3">
            <Button
              className="bg-transparent cursor-pointer flex items-center gap-1 text-black border border-[#00000048] text-lg rounded-lg hover:bg-[#463bbd]"
              onClick={saveDraft}
            >
              <span className="opacity-[.7]">Save Draft</span>
            </Button>
            <Button
              className="bg-[#000] text-white cursor-pointer flex items-center gap-1 border text-lg rounded-lg"
              onClick={exportHtml}
            >
              <span>Send</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Emaileditor;

