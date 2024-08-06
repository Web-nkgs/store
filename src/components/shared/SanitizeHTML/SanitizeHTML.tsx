import { HTMLAttributes, createElement } from "react"
import sanitize from 'sanitize-html'

// This avoid XSS (cross site scripting), by only allowing the tags we need, the rest gets ignored.
type SanitizeHTMLProps = {
    children: string,
    tag: string
} & HTMLAttributes<HTMLElement>

export const SanitizeHTML = ({ tag, children, ...rest }: SanitizeHTMLProps) => {
    const sanitizedHTML = sanitize(children, {
        allowedTags: ['b', 'i', 'em', 'strong']
    })

    return createElement(tag, {...rest}, sanitizedHTML)
}