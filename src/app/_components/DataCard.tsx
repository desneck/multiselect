import { Character } from "@/types";
import Image from "next/image";
import React from "react";

/*
 {
    id: 17,
    name: 'Annie',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Female',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1'
    },
    location: {
      name: 'Anatomy Park',
      url: 'https://rickandmortyapi.com/api/location/5'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg',
    episode: [ 'https://rickandmortyapi.com/api/episode/3' ],
    url: 'https://rickandmortyapi.com/api/character/17',
    created: '2017-11-04T22:21:24.481Z'
  },
*/

const DataCard = ({ character }: { character: Character }) => {
  return (
    <div className="max-w-sm w-full py-6 px-3">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-cover bg-center  p-4">
          <Image
            src={character.image}
            alt={character.name}
            width={300}
            height={300}
            layout="responsive"
            className="w-full h-full object-cover rounded-xl "
          />

          <div className="flex justify-end">
            <svg
              className="h-6 w-6 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
            </svg>
          </div>
        </div>
        <div className="p-4">
          <p className="text-3xl text-gray-900">{character.name}</p>
        </div>
        <div className="flex p-4 border-t border-gray-300 text-gray-700">
          <div className="flex-1 inline-flex items-center">
            <p className="flex flex-col">
              <span className="text-gray-900 font-bold">Gender</span>
              <span>{character.gender}</span>
            </p>
          </div>
          <div className="flex-1 inline-flex items-center">
            <p className="flex flex-col">
              <span className="text-gray-900 font-bold">Race</span>
              <span>{character.species}</span>
            </p>
          </div>
        </div>

        <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
          <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">
            What should adcreative do ?
          </div>
        </div>
      </div>

      {

      }
    </div>
  );
};

export default DataCard;
