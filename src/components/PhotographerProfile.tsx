import { Gallery } from './Gallery'
import { ImageGallery } from './Gallery/ImageGallery'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { PortfolioData } from '@/@types/portfolioData'

interface PhotographerProfileProps {
  portfolio: PortfolioData[] | undefined
}

export function PhotographerProfile({ portfolio }: PhotographerProfileProps) {
  return (
    <div className="flex w-full max-w-96 items-center gap-8">
      <Tabs defaultValue="photos" className="w-full">
        <TabsList className="w-full justify-evenly bg-transparent font-secondary text-white">
          <TabsTrigger
            className="bg-none p-0 transition-none data-[state=active]:bg-transparent data-[state=active]:font-bold data-[state=active]:text-white data-[state=active]:underline data-[state=active]:shadow-none"
            value="photos"
          >
            Fotos
          </TabsTrigger>
        </TabsList>
        <TabsContent value="photos">
          <section className="mx-auto max-h-[400px] w-full max-w-96 overflow-auto sm:max-h-[600px]">
            {portfolio ? (
              <Gallery>
                {portfolio.map((image) => (
                  <ImageGallery
                    key={image.id}
                    src={image.fotoUrl}
                    alt={image.descricao}
                  />
                ))}
              </Gallery>
            ) : (
              <p className="mt-4 text-center">
                Fotógrafo ainda não possui um portfolio
              </p>
            )}
          </section>
        </TabsContent>
      </Tabs>
    </div>
  )
}
