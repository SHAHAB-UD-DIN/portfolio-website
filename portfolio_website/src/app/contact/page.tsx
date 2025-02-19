import SimpleForm from "@/components/SimpleForm";

export default function Contact(){
    return(
        <>
        <div className="justify-center text-center m-10">
                <h1 className="text-base">Connect with me</h1>
                <h2 className="text-3xl font-semibold">Get in touch</h2>
                <p>
                    I'd love to hear from you! If you have any questions, comments or feedback.
                    please use the form below.
                </p>
        </div>
        <SimpleForm />
        </>
    )
}