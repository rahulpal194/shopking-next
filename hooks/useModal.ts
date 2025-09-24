export default function useModal (){
    const activeClass = 'active'
    const hiddenClass = 'overflow-hidden'

    const openModal = (targetID: string) => {
        const targetElement = document.querySelector('#' + targetID) as HTMLElement;
        targetElement?.classList.add(activeClass);
        document.body.classList.add(hiddenClass);
        document.documentElement.classList.add(hiddenClass)
    }

    const closeModal = (targetID: string) => {
        const targetElement = document.querySelector('#' + targetID) as HTMLElement;
        targetElement?.classList.remove(activeClass);
        document.body.classList.remove(hiddenClass);
        document.documentElement.classList.remove(hiddenClass)
    }

    return {openModal, closeModal}
}