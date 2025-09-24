
export default function useCanvas (){
    const activeClass = 'active'
    const hiddenClass = 'overflow-hidden'

    const openCanvas = (targetID: string) => {
        const targetElement = document.querySelector('#' + targetID) as HTMLElement;
        targetElement?.classList.add(activeClass);
        document.body.classList.add(hiddenClass);
        document.documentElement.classList.add(hiddenClass)
    }

    const closeCanvas = (targetID: string) => {
        const targetElement = document.querySelector('#' + targetID) as HTMLElement;
        targetElement?.classList.remove(activeClass);
        document.body.classList.remove(hiddenClass);
        document.documentElement.classList.remove(hiddenClass)
    }

    const closeBackdrop = (event: any) => {
        const containerElement = event.currentTarget.firstElementChild as HTMLElement
        const isWrapperElement = event.target.contains(containerElement)
        if(isWrapperElement) {
            event.currentTarget.classList.remove(activeClass)
            document.documentElement.classList.remove(hiddenClass)
            document.body.classList.remove(hiddenClass)
        }
    }

    return { openCanvas, closeCanvas, closeBackdrop }
}