import { useState } from 'react'
import startImg from '../assets/start.webp'
import chooseFlavourImg from '../assets/choose_flavour.webp'
import chooseToppingsImg from '../assets/choose_toppings.webp'
import payImg from '../assets/pay.webp'

const steps = [
  {
    id: 0,
    title: 'Ready to Start?',
    description: 'Begin your YohGut journey!',
    image: startImg,
    buttonText: 'Start',
    icon: 'play_arrow',
  },
  {
    id: 1,
    title: 'Choose Your Flavor',
    description: 'Pick from our delicious probiotic flavors',
    image: chooseFlavourImg,
    buttonText: 'Continue',
    icon: 'icecream',
  },
  {
    id: 2,
    title: 'Add Your Toppings',
    description: 'Fresh fruits, nuts, and more!',
    image: chooseToppingsImg,
    buttonText: 'Continue',
    icon: 'nutrition',
  },
  {
    id: 3,
    title: 'Complete Payment',
    description: 'Quick and easy checkout',
    image: payImg,
    buttonText: 'Finish',
    icon: 'payments',
  },
]

export default function YogurtGame() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1)
        setIsTransitioning(false)
      }, 300)
    } else {
      setShowCelebration(true)
      setTimeout(() => {
        setShowCelebration(false)
        setCurrentStep(0)
      }, 2500)
    }
  }

  const handleStepClick = (stepId) => {
    if (stepId < currentStep) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentStep(stepId)
        setIsTransitioning(false)
      }, 300)
    }
  }

  const currentStepData = steps[currentStep]

  return (
    <section className="my-16 overflow-hidden rounded-[48px] bg-gradient-to-br from-primary/5 via-secondary/5 to-tertiary/5 p-6 yogurt-shadow md:p-12">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-headline-lg text-on-background md:text-display-sm">
          Build Your Cup
        </h2>
        <p className="text-body-lg text-on-surface-variant">
          Experience our self-serve journey in 4 simple steps
        </p>
      </div>

      {/* Progress Steps */}
      <div className="mb-8 flex items-center justify-center gap-2 md:gap-4">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <button
              onClick={() => handleStepClick(index)}
              disabled={index > currentStep}
              className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 md:h-12 md:w-12 md:text-base ${
                index === currentStep
                  ? 'bg-primary text-on-primary scale-110 shadow-lg'
                  : index < currentStep
                    ? 'bg-primary/80 text-on-primary cursor-pointer hover:scale-105'
                    : 'bg-surface-variant text-on-surface-variant'
              }`}
            >
              {index < currentStep ? (
                <span className="material-symbols-outlined text-xl">check</span>
              ) : (
                index + 1
              )}
            </button>
            {index < steps.length - 1 && (
              <div
                className={`mx-1 h-1 w-6 rounded-full transition-all duration-500 md:mx-2 md:w-12 ${
                  index < currentStep ? 'bg-primary' : 'bg-surface-variant'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-center lg:gap-12">
        {/* Image Container */}
        <div className="relative w-full max-w-md lg:w-1/2">
          <div
            className={`relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-300 ${
              isTransitioning ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
            }`}
          >
            <img
              src={currentStepData.image}
              alt={currentStepData.title}
              className="h-auto w-full object-cover"
            />
            
            {/* Step Badge */}
            <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {currentStepData.icon}
              </span>
              <span className="text-sm font-semibold text-on-background">
                Step {currentStep + 1} of 4
              </span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex w-full max-w-md flex-col items-center lg:w-1/2 lg:items-start lg:pt-8">
          <div
            className={`w-full transition-all duration-300 ${
              isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
            }`}
          >
            <h3 className="mb-2 text-center text-headline-md text-on-background lg:text-left">
              {currentStepData.title}
            </h3>
            <p className="mb-6 text-center text-body-lg text-on-surface-variant lg:text-left">
              {currentStepData.description}
            </p>

            {/* Action Button */}
            <button
              onClick={handleNext}
              className={`group relative w-full overflow-hidden rounded-full px-8 py-4 text-label-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                currentStep === steps.length - 1
                  ? 'bg-gradient-to-r from-primary via-secondary to-tertiary text-white'
                  : 'bg-primary text-on-primary'
              }`}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {currentStep === steps.length - 1 ? (
                  <>
                    <span className="material-symbols-outlined">celebration</span>
                    Enjoy Your YohGut!
                  </>
                ) : (
                  <>
                    {currentStepData.buttonText}
                    <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-tertiary opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
            </button>

            {/* Start Over */}
            {currentStep > 0 && (
              <button
                onClick={() => {
                  setIsTransitioning(true)
                  setTimeout(() => {
                    setCurrentStep(0)
                    setIsTransitioning(false)
                  }, 300)
                }}
                className="mt-4 w-full text-center text-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                Start Over
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Celebration Overlay */}
      {showCelebration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="animate-bounce rounded-3xl bg-white p-12 text-center shadow-2xl">
            <div className="mb-4 text-6xl">🎉</div>
            <h3 className="mb-2 text-2xl font-bold text-on-background">
              Order Complete!
            </h3>
            <p className="text-on-surface-variant">Enjoy your delicious YohGut!</p>
          </div>
        </div>
      )}
    </section>
  )
}
