'use client'

import { useState, useCallback, memo } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Expand, Grid3X3, Zap, Cable, Lightbulb, Plus } from 'lucide-react'

// Gallery data structure
const galleryData = {
  automation: {
    title: 'Automação',
    icon: Zap,
    folder: 'automação',
    images: [
      'Imagem do WhatsApp de 2025-09-27 à(s) 13.42.55_7b52e099.jpg',
      'IMG-20250927-WA0029.jpg',
      'IMG-20250927-WA0030.jpg',
      'IMG-20250927-WA0031.jpg',
      'IMG-20250927-WA0032.jpg',
      'IMG-20250927-WA0033.jpg',
      'IMG-20250927-WA0034.jpg',
      'IMG-20250927-WA0035.jpg',
      'IMG-20250927-WA0036.jpg',
      'IMG-20250927-WA0037.jpg',
      'IMG-20250927-WA0038.jpg',
      'IMG-20250927-WA0039.jpg',
      'IMG-20250927-WA0040.jpg',
      'IMG-20250927-WA0041.jpg',
      'IMG-20250927-WA0042.jpg'
    ]
  },
  panels: {
    title: 'Painéis Elétricos',
    icon: Grid3X3,
    folder: 'paineis',
    images: [
      'IMG-20250927-WA0063.jpg',
      'IMG-20250927-WA0064.jpg',
      'IMG-20250927-WA0065.jpg',
      'IMG-20250927-WA0066.jpg',
      'IMG-20250927-WA0067.jpg',
      'IMG-20250927-WA0068.jpg',
      'IMG-20250927-WA0069.jpg',
      'IMG-20250927-WA0070.jpg',
      'IMG-20250927-WA0071.jpg',
      'IMG-20250927-WA0072.jpg',
      'IMG-20250927-WA0073.jpg',
      'IMG-20250927-WA0074.jpg',
      'IMG-20250927-WA0075.jpg',
      'IMG-20250927-WA0076.jpg',
      'IMG-20250927-WA0077.jpg',
      'IMG-20250927-WA0078.jpg',
      'IMG-20250927-WA0079.jpg',
      'IMG-20250927-WA0080.jpg',
      'IMG-20250927-WA0081.jpg',
      'IMG-20250927-WA0082.jpg',
      'IMG-20250927-WA0083.jpg',
      'IMG-20250927-WA0084.jpg',
      'IMG-20250927-WA0085.jpg'
    ]
  },
  cableTrays: {
    title: 'Eletrocalhas',
    icon: Cable,
    folder: 'eletrocalhas',
    images: [
      'IMG-20250927-WA0002.jpg',
      'IMG-20250927-WA0003.jpg',
      'IMG-20250927-WA0004.jpg',
      'IMG-20250927-WA0005.jpg',
      'IMG-20250927-WA0006.jpg',
      'IMG-20250927-WA0007.jpg',
      'IMG-20250927-WA0008.jpg',
      'IMG-20250927-WA0009.jpg',
      'IMG-20250927-WA0010.jpg',
      'IMG-20250927-WA0011.jpg',
      'IMG-20250927-WA0012.jpg',
      'IMG-20250927-WA0013.jpg',
      'IMG-20250927-WA0014.jpg',
      'IMG-20250927-WA0015.jpg',
      'IMG-20250927-WA0016.jpg',
      'IMG-20250927-WA0017.jpg',
      'IMG-20250927-WA0018.jpg',
      'IMG-20250927-WA0019.jpg',
      'IMG-20250927-WA0020.jpg',
      'IMG-20250927-WA0021.jpg',
      'IMG-20250927-WA0022.jpg',
      'IMG-20250927-WA0023.jpg',
      'IMG-20250927-WA0024.jpg',
      'IMG-20250927-WA0025.jpg',
      'IMG-20250927-WA0026.jpg',
      'IMG-20250927-WA0027.jpg',
      'IMG-20250927-WA0028.jpg'
    ]
  },
  lighting: {
    title: 'Iluminação',
    icon: Lightbulb,
    folder: 'iluminação',
    images: [
      'IMG-20250927-WA0043.jpg',
      'IMG-20250927-WA0044.jpg',
      'IMG-20250927-WA0045.jpg',
      'IMG-20250927-WA0046.jpg',
      'IMG-20250927-WA0047.jpg',
      'IMG-20250927-WA0048.jpg',
      'IMG-20250927-WA0049.jpg',
      'IMG-20250927-WA0050.jpg',
      'IMG-20250927-WA0051.jpg',
      'IMG-20250927-WA0052.jpg',
      'IMG-20250927-WA0053.jpg',
      'IMG-20250927-WA0054.jpg',
      'IMG-20250927-WA0055.jpg',
      'IMG-20250927-WA0056.jpg',
      'IMG-20250927-WA0057.jpg',
      'IMG-20250927-WA0058.jpg',
      'IMG-20250927-WA0059.jpg',
      'IMG-20250927-WA0060.jpg',
      'IMG-20250927-WA0061.jpg',
      'IMG-20250927-WA0062.jpg'
    ]
  }
}

type CategoryKey = keyof typeof galleryData

// Memoized image component for better performance
const GalleryImage = memo(({ 
  imagePath, 
  title, 
  index, 
  onClick 
}: { 
  imagePath: string
  title: string
  index: number
  onClick: (path: string, idx: number) => void
}) => {
  return (
    <div
      onClick={() => onClick(imagePath, index)}
      className="
        relative group cursor-pointer overflow-hidden rounded-lg
        shadow-md hover:shadow-xl transition-shadow duration-300
        bg-gray-100
      "
    >
      <div className="aspect-square relative">
        <Image
          src={imagePath}
          alt={`${title} - Imagem ${index + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 50vw, 25vw"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
        />
        
        {/* Simplified hover overlay for mobile performance */}
        <div className="
          absolute inset-0 bg-black/40
          opacity-0 group-hover:opacity-100 transition-opacity duration-200
          flex items-center justify-center
          md:bg-gradient-to-t md:from-black/70 md:via-black/20 md:to-transparent
        ">
          <Expand className="text-white hidden md:block md:transform md:scale-0 md:group-hover:scale-100 md:transition-transform md:duration-200" size={24} />
        </div>
      </div>
    </div>
  )
})

GalleryImage.displayName = 'GalleryImage'

function Gallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('panels')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showAll, setShowAll] = useState(false)

  const currentCategory = galleryData[activeCategory]
  
  // Show fewer images initially
  const INITIAL_IMAGES_COUNT = 8 // Show 2 rows of 4 images initially
  const imagesToShow = showAll 
    ? currentCategory.images 
    : currentCategory.images.slice(0, INITIAL_IMAGES_COUNT)
  const hasMoreImages = currentCategory.images.length > INITIAL_IMAGES_COUNT

  const openImage = useCallback((imagePath: string, index: number) => {
    setSelectedImage(imagePath)
    setCurrentImageIndex(index)
  }, [])

  const closeModal = useCallback(() => {
    setSelectedImage(null)
  }, [])

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    const images = currentCategory.images
    let newIndex = currentImageIndex

    if (direction === 'prev') {
      newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1
    } else {
      newIndex = currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0
    }

    setCurrentImageIndex(newIndex)
    setSelectedImage(`/${currentCategory.folder}/${images[newIndex]}`)
  }, [currentCategory, currentImageIndex])

  // Reset showAll when changing categories
  const handleCategoryChange = useCallback((key: CategoryKey) => {
    setActiveCategory(key)
    setShowAll(false)
  }, [])

  return (
    <section id="gallery" className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nossos Projetos
            </span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos realizados com excelência
          </p>
        </div>

        {/* Category Tabs - Grid 2x2 on mobile, flex on desktop */}
        <div className="mb-6 md:mb-8">
          <div className="grid grid-cols-2 md:flex md:justify-center gap-2 md:gap-3">
            {(Object.keys(galleryData) as CategoryKey[]).map((key) => {
              const category = galleryData[key]
              const Icon = category.icon
              const isActive = activeCategory === key
              
              return (
                <button
                  key={key}
                  onClick={() => handleCategoryChange(key)}
                  className={`
                    flex items-center justify-center gap-1.5 px-2 md:px-5 py-2 md:py-2.5 rounded-lg md:rounded-full font-medium
                    transition-all duration-200
                    ${isActive 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                    }
                  `}
                >
                  <Icon size={16} className="md:w-5 md:h-5 flex-shrink-0" />
                  <span className="text-xs md:text-base">{category.title}</span>
                  <span className={`
                    hidden md:inline-block px-1.5 py-0.5 rounded-full text-xs
                    ${isActive ? 'bg-white/20' : 'bg-gray-200'}
                  `}>
                    {category.images.length}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Image Grid - Full width with 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {imagesToShow.map((image, index) => {
            const imagePath = `/${currentCategory.folder}/${image}`
            return (
              <GalleryImage
                key={`${activeCategory}-${index}`}
                imagePath={imagePath}
                title={currentCategory.title}
                index={index}
                onClick={openImage}
              />
            )
          })}
        </div>

        {/* Show More/Less Button */}
        {hasMoreImages && (
          <div className="flex justify-center mt-6 md:mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="
                flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 
                bg-gradient-to-r from-blue-600 to-purple-600 
                text-white rounded-full font-medium text-sm md:text-base
                shadow-lg md:active:scale-95 md:transition-transform md:duration-150
              "
            >
              {showAll ? (
                <>
                  <span>Ver menos</span>
                  <ChevronLeft size={18} className="rotate-90" />
                </>
              ) : (
                <>
                  <span>Ver mais ({currentCategory.images.length - INITIAL_IMAGES_COUNT})</span>
                  <Plus size={18} />
                </>
              )}
            </button>
          </div>
        )}

        {/* Modal/Lightbox - Optimized for mobile */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 md:top-4 md:right-4 text-white/80 hover:text-white transition-colors p-2 z-50"
              aria-label="Fechar"
            >
              <X size={28} className="md:w-8 md:h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('prev')
              }}
              className="
                absolute left-2 md:left-4 text-white/80 hover:text-white 
                transition-opacity p-1.5 md:p-2 rounded-full
                bg-white/10 active:bg-white/20
                z-50
              "
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={24} className="md:w-8 md:h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('next')
              }}
              className="
                absolute right-2 md:right-4 text-white/80 hover:text-white 
                transition-opacity p-1.5 md:p-2 rounded-full
                bg-white/10 active:bg-white/20
                z-50
              "
              aria-label="Próxima imagem"
            >
              <ChevronRight size={24} className="md:w-8 md:h-8" />
            </button>

            {/* Image Container */}
            <div 
              className="relative max-w-full md:max-w-6xl max-h-[80vh] md:max-h-[90vh] w-full h-full flex items-center justify-center px-12 md:px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt={`${currentCategory.title} - Imagem ampliada`}
                width={1920}
                height={1080}
                className="object-contain w-full h-full"
                priority
                quality={90}
              />
              
              {/* Image Counter */}
              <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm">
                {currentImageIndex + 1} de {currentCategory.images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default memo(Gallery)
