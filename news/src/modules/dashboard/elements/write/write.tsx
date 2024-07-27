'use client';

import { useEffect, useState } from "react";
import { Pen, Space, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { getEmails } from "@/actions/get.emails";
import { useClerk } from "@clerk/nextjs";
import { Delete } from "lucide-react";
import Link from "next/link";
const Write = () => {
    const [emailTitle, setEmailTitle] = useState("");
    const [emails, setEmails] = useState<any>([]);
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const {user} = useClerk()
    const handleCreate = () => {
        if (emailTitle.length === 0) {
            toast.error("Please Enter Your Email");
        } else {
            const formattedTitle = emailTitle.replace(/\s+/g, "-").replace(/&/g, "-");
            router.push(`/dashboard/new-email?subject=${formattedTitle}`);
        }
    };
    const FindEmails = async () => {
        await getEmails({ newsLetterOwnerId: user?.id! })
          .then((res) => {
            setEmails(res);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      useEffect(() => {
        FindEmails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [user]);

      const deleteHanlder = async (id: string) => {
        // await deleteEmail({ emailId: id }).then((res) => {
        //   FindEmails();
        // });
      };

    return (
        <div className="w-full p-5 flex flex-wrap gap-6 relative">
            <div className="w-[200px] h-[200px] bg-slate-50 flex flex-col justify-center items-center rounded border cursor-pointer"
                 onClick={() => setOpen(!open)}>
                <span className="text-2xl block text-center mb-3 text-black">
                    <Pen />
                </span>
                <h5 className="text-2xl text-black">Create new</h5>
            </div>
             {/* save emails fetch */}

             {
                emails && emails.map((i:any)=>{
                    const formattedTitle=i?.title
                    ?.replace(/\s+/g, "-")
                    .replace(/&/g, "-");

                    return(
                        <div className="w-[200px] h-[200px] z-[0] relative bg-slate-50 flex flex-col items-center justify-center rounded border cursor-pointer" 
                        key={i?._id}>
                         <span  className="absolute block z-20 right-2 top-2 text-2xl cursor-pointer"
                onClick={() => deleteHanlder(i?._id)}>
                         <Delete className=" text-black"/>
                         </span>
                         <Link
                href={`/dashboard/new-email?subject=${formattedTitle}`}
                className="text-xl text-black"
              >
                {i.title}
              </Link>
                        </div>
                    )
                })
             }
            {
                open && (
                    <div className="absolute flex items-center justify-center top-0 left-0 bg-[#00000028] h-screen w-full">
                        <div className="w-[600px] p-5 bg-white rounded shadow relative">
                            <div className="absolute top-3 right-3">
                                <span className="text-lg cursor-pointer" onClick={() => setOpen(!open)}>
                                    <X className="text-black" />
                                </span>
                            </div>
                            <h5 className="text-2xl text-center mb-3">Enter your Email subject</h5>
                            <input
                                type="text"
                                className="w-full p-2 bg-black text-white border rounded"
                                placeholder="Email subject"
                                value={emailTitle}
                                onChange={(e) => setEmailTitle(e.target.value)}
                            />
                            <Button
                                color="black"
                                className="rounded text-xl mt-3 bg-black text-white hover:bg-[#463bbd]"
                                onClick={handleCreate}
                            >
                                Continue
                            </Button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Write;
