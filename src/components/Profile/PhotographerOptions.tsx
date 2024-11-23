import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Gallery } from '../Gallery'
import { ImageGallery } from '../Gallery/ImageGallery'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { faFolder, faThumbsUp, faUser } from '@fortawesome/free-solid-svg-icons'
import { UpdateProfile } from './UpdateProfile'
import Link from 'next/link'

interface ProtographerOptionsProps {
  name: string
  email: string
  telephone: string
  cep: string
  cpf: string
  galleryHeight?: string
}

export function PhotographerOptions({
  name,
  email,
  telephone,
  cep,
  cpf,
}: ProtographerOptionsProps) {
  const randomImages: { src: string; alt: string }[] = [
    {
      src: 'https://cdn.pixabay.com/photo/2023/09/22/03/51/beautiful-8267949_960_720.jpg',
      alt: 'Random Image',
    },
    {
      src: 'https://cdn.pixabay.com/photo/2020/02/15/00/33/yoga-4849683_960_720.jpg',
      alt: 'Random Image',
    },
    {
      src: 'https://cdn.pixabay.com/photo/2020/05/06/00/15/cyberpunk-5135622_1280.jpg',
      alt: 'Random Image',
    },
    {
      src: 'https://cdn.pixabay.com/photo/2020/04/14/03/03/japan-5040703_1280.jpg',
      alt: 'Random Image',
    },
    {
      src: 'https://cdn.pixabay.com/photo/2019/07/13/16/44/woman-4335235_1280.jpg',
      alt: 'Random Image',
    },
    {
      src: 'https://cdn.pixabay.com/photo/2021/12/21/03/56/street-6884534_960_720.jpg',
      alt: 'Random Image',
    },
    {
      src: 'https://cdn.pixabay.com/photo/2021/12/21/03/54/street-6884533_960_720.jpg',
      alt: 'Random Image',
    },
  ]

  return (
    <div className="flex items-center gap-8">
      <Tabs defaultValue="photos" className="w-full">
        <TabsList className="w-full justify-evenly bg-transparent font-secondary text-white">
          <TabsTrigger
            className="bg-none p-0 transition-none data-[state=active]:bg-transparent data-[state=active]:font-bold data-[state=active]:text-white data-[state=active]:underline data-[state=active]:shadow-none"
            value="photos"
          >
            Fotos
          </TabsTrigger>
          <TabsTrigger
            className="bg-none p-0 transition-none data-[state=active]:bg-transparent data-[state=active]:font-bold data-[state=active]:text-white data-[state=active]:underline data-[state=active]:shadow-none"
            value="about"
          >
            Sobre
          </TabsTrigger>
        </TabsList>
        <TabsContent value="photos">
          <section className="mx-auto max-h-[400px] w-full max-w-96 overflow-auto sm:max-h-[600px]">
            <Gallery>
              {randomImages.map((image) => (
                <ImageGallery key={image.src} src={image.src} alt={image.alt} />
              ))}
            </Gallery>
          </section>
        </TabsContent>
        <TabsContent value="about">
          <section className="flex h-full flex-col gap-6">
            <p className="text-gray-light-click">
              Meu nome é {name}, tenho 25 anos, faço fotografias diversas
            </p>
            <Dialog>
              <DialogTrigger className="group flex w-full cursor-pointer items-center justify-between gap-4 rounded-2xl bg-gray-light-click px-7 py-5 text-[#555555] transition-colors hover:bg-white hover:text-black">
                <div className="flex items-center gap-2 sm:gap-4">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-xl sm:text-2xl"
                  />
                  <p className="text-lg font-bold uppercase leading-none sm:text-xl">
                    info
                  </p>
                </div>
                <span className="flex gap-1 text-lg font-bold leading-none text-[#DB4949] group-hover:text-red-500 sm:text-xl">
                  ver +
                </span>
              </DialogTrigger>
              <DialogContent className="font-secondary">
                <DialogHeader className="px-9 py-8">
                  <DialogTitle className="text-left text-xl uppercase text-black-click">
                    informações
                  </DialogTitle>
                </DialogHeader>
                <DialogDescription className="flex flex-col gap-6 px-9 py-8 pt-0 text-black-click">
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-bold uppercase">Nome:</p>
                    <p className="text-base">{name}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-bold uppercase">Email:</p>
                    <p className="text-base">{email}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-bold uppercase">Telefone:</p>
                    <p className="text-base">{telephone}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-bold uppercase">CEP:</p>
                    <p className="text-base">{cep}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-bold uppercase">CPF:</p>
                    <p className="text-base">{cpf}</p>
                  </div>
                </DialogDescription>
                <DialogFooter className="items-center justify-center rounded-b-2xl bg-white p-6">
                  <UpdateProfile
                    name={name}
                    email={email}
                    telephone={telephone}
                    cep={cep}
                  />
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Link
              href="/meus-jobs"
              className="group flex w-full cursor-pointer items-center justify-between gap-4 rounded-2xl bg-gray-light-click px-7 py-5 text-[#555555] transition-colors hover:bg-white hover:text-black"
            >
              <div className="flex items-center gap-2 sm:gap-4">
                <FontAwesomeIcon
                  icon={faFolder}
                  className="text-xl sm:text-2xl"
                />
                <p className="text-lg font-bold uppercase leading-none sm:text-xl">
                  jobs
                </p>
              </div>
              <span className="flex gap-1 text-lg font-bold leading-none text-[#DB4949] group-hover:text-red-500 sm:text-xl">
                ver +
              </span>
            </Link>

            <div className="group flex w-full cursor-pointer items-center justify-between gap-4 rounded-2xl bg-gray-light-click px-7 py-5 text-[#555555] transition-colors hover:bg-white hover:text-black">
              <div className="flex items-center gap-2 sm:gap-4">
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="text-xl sm:text-2xl"
                />
                <p className="text-lg font-bold uppercase leading-none sm:text-xl">
                  Interesse
                </p>
              </div>
              <span className="flex gap-1 text-lg font-bold leading-none text-[#DB4949] group-hover:text-red-500 sm:text-xl">
                ver +
              </span>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  )
}
