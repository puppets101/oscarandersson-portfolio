import React, { FC } from "react";

type ProjectProps = {
  name?: string;
  description: string;
  url: string;
  img: string;
};
const Project: FC<ProjectProps> = ({ description, url, img }: ProjectProps) => {
  return (
    <div>
      <span className="block rounded shadow h-80 w-full">
        <a href={url} target="_blank" rel="noreferrer">
          <img
            src={img}
            alt={description}
            className="object-cover h-full w-full hover:shadow-lg"
          />
        </a>
        <span className="flex justify-center mt-2">
          <p className="font-light italic">{description}</p>
        </span>
      </span>
    </div>
  );
};

export default Project;
