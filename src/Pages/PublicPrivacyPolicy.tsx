import { ConfigProvider } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetPrivacyPolicyQuery } from "../redux/features/setting/settingApi";

const PublicPrivacyPolicy = () => {
    const [content, setContent] = useState("");

    const { data: policyData } = useGetPrivacyPolicyQuery(undefined)

    console.log("policyData", policyData);
    useEffect(() => {
        setContent(policyData)
    }, [policyData])

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#027348",
                    colorBgContainer: "#F1F4F9",
                },
                components: {
                    Form: {
                        labelColor: "#A1A1A1",
                    },
                    Input: {
                        borderRadius: 12,
                        colorBorder: "#404040",
                        colorPrimaryBg: "#121212",
                        colorText: "#757575",
                        inputFontSize: 16,
                        // activeBg: "#989898",
                        colorBgBlur: "#989898",
                        colorTextPlaceholder: "#757575 ",
                        colorBgContainer: "#00000040",
                    },
                    Checkbox: {
                        colorBgContainer: "transparent",
                        colorBorder: "#989898",
                        colorText: "#989898",
                        fontSize: 15,
                        colorPrimary: "#989898",
                        colorPrimaryHover: "#989898",
                        controlInteractiveSize: 20,
                        borderRadiusSM: 50,
                    },
                },
            }}
        >
            <div className="flex justify-center p-3 md:px-0 py-10 h-screen" style={{
                background:
                    "linear-gradient(91.95deg, rgba(2, 115, 72, .8) -100.37%, rgba(3, 47, 30, .40) 101.16%)",
            }}>
                <div className="bg-[#111111]/50 border border-primary/10 rounded-xl p-8 md:p-12 prose prose-invert w-full md:max-w-6xl mx-auto h-full overflow-y-auto mb-14">
                    <div className="mb-8">
                        <Link to="/"><img src="/logo.png" className="w-18 mb-5 mx-auto" alt="" /></Link>


                        <h2 className="text-2xl font-serif text-white mb-4 text-center">Terms & Condition</h2>
                    </div>
                    <div
                        style={{
                            border: "1px solid #989898",
                            borderRadius: 20,
                            padding: "20px",                            
                            color: "rgba(255,255,255,0.8)",
                            overflow: "auto",
                            background: "transparent",
                        }}
                        className="w-full mx-auto min-h-[350px] md:min-h-[500px]"
                        dangerouslySetInnerHTML={{ __html: content || "No content yet." }}
                    />            
            </div>
            </div>
        </ConfigProvider>
    );
};

export default PublicPrivacyPolicy;
