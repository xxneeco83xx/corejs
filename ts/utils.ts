
/**
 * 
 * @param query string - function for take elements from the document
 */
export const $selector = (query: string) : any => {
    return document.querySelector(query);
};