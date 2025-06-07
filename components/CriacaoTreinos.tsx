import Header from "./Header";
import { useNavigate } from "react-router-dom";

interface MusculosTypes {
  id: number;
  imagem: string;
  musculo: string,
  alt: string;
}

const imagens: Array<MusculosTypes> = [
  {
    id: 1,
    imagem: "https://media.istockphoto.com/id/531792040/pt/foto/latissimus-dorsi-anatomia-de-m%C3%BAsculos-isolado-sobre-branco.jpg?s=612x612&w=0&k=20&c=vQTnge_rWSVM-edsmPfrX6kPJt41mV3KGlkJ5c75hm0=",
    musculo: "Costas",
    alt: "Músculo Costas",
  },

  {
    id: 2,
    imagem:"https://previews.123rf.com/images/decade3d/decade3d1605/decade3d160500030/58756539-b%C3%ADceps-m%C3%BAsculos-anatomia-m%C3%BAsculos-isolados-no-branco-ilustra%C3%A7%C3%A3o-3d.jpg",
    musculo: "Biceps",
    alt: "Músculo Bíceps",
  },

  {
    id: 3,
    imagem: "https://media.istockphoto.com/id/533845778/photo/chest-muscles-pectoralis-major-and-minor-anatomy-muscles.jpg?s=612x612&w=is&k=20&c=mndd03QkLWgvVp11lJg3clsjVI-HTaNw7GQpvvQ9A9A=",
    musculo: "Peitoral",
    alt: "Músculo Peitoral",
  },

  {
    id: 4,
    imagem:"https://as1.ftcdn.net/v2/jpg/01/10/74/06/1000_F_110740617_0hvWsZt01yL4o7ciS1LSkJVjTws1ffFV.jpg",
     musculo: "Triceps",
    alt: "Músculo Tríceps",
  },


    {
    id: 5,
    imagem:"https://i.ibb.co/chK1njY1/osso-do-ombro-2-1900x1024-removebg-preview.png",
     musculo: "Ombros",
    alt: "Músculo Tríceps",
  },



  {
    id: 6,
    imagem: "https://st2.depositphotos.com/1909187/10981/i/950/depositphotos_109811974-stock-photo-rectus-abdominis-abdominal-muscles-anatomy.jpg",
    musculo: "Abdomen",
    alt: "Músculo Abdômen",
  },

  {
    id: 7,
    musculo: "Quadriceps",
    imagem:"https://elevatephysicaltherapyandfitness.com/wp-content/uploads/2021/04/Quadriceps.png",
    alt: "Quadriceps",
  },

  {
    id: 8,
    musculo: "Posterior(Coxa)",
    imagem: "https://st2.depositphotos.com/1909187/10981/i/450/depositphotos_109811246-stock-photo-hamstrings-muscles-anatomy-muscle-isolated.jpg",
    alt: "Posterior de coxa",
  },

  {
    id: 9,
    musculo: "Gluteo",
    imagem:"https://media.istockphoto.com/id/533845216/pt/foto/gl%C3%BAteos-gl%C3%BAteo-m%C3%BAsculos-anatomia-de-m%C3%BAsculos-isolados.jpg?s=612x612&w=0&k=20&c=bSzMaKckKdMH9kzWyIHRf39imyC1zvRAcbCRaE_XMIU=",
    alt: "Músculo Glúteo",
  },

  {
    id: 10,
    musculo: "Panturrilha",
    imagem:"https://st2.depositphotos.com/1909187/10981/i/950/depositphotos_109811594-stock-photo-calf-muscle-gastrocnemius-plantar-anatomy.jpg",
    alt: "Músculo Panturrilha",
  },
];

const Perfil = () => {
  
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="flex flex-col  items-center mt-10 px-4">
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {imagens.map((item, index) => (
            <div
              key={index}
               onClick={() => navigate(`/exercicios/${item.musculo}`)}
              className="flex justify-center items-center rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={item.imagem}
                alt={item.alt}
                className="w-[75%] h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Perfil;
