import Image from "next/image";
import Link from "next/link";

const ProjectPreview = () => {
    const title: string = "Data Analysis App";
    const desc: string = "Processes data in Python";
    const linkUrl: string = "/data_analysis";

    return (
        <div className="flex gap-4">
            <div className="relative w-24 h-16">
                <Link href={linkUrl}>
                    <a><Image src="/data-analytics-project.jpg" className="hover:opacity-80 delay-100" layout="fill"/></a>
                </Link>
            </div>
            <div className="my-auto">
                <Link href={linkUrl}>
                    <a className="font-bold underline hover:text-indigo-600">
                        {title}
                    </a>
                </Link>
                <div>
                    {desc}
                </div>
            </div>
        </div>
    );
};

export default ProjectPreview;