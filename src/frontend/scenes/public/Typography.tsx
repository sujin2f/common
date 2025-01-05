import React from 'react'

import { Link } from 'react-router-dom'
import { Callout } from 'src/common/components/containers/Callout'
import { Code } from 'src/common/components/containers/Code'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'
import { ArticleHeader } from 'src/frontend/components/ArticleHeader'
import { sampleText } from 'src/frontend/constants'

const Typography = () => {
    const codeBlock = `{
    "What I am": "I am a big chunk of code. I can have very long lines, I will not break and show a scrollbar instead.",
    ...
}`
    return (
        <main>
            <ArticleHeader title="Typography" description="Base style" />
            <Row dom="article">
                <Column small={12}>
                    <h1>Components</h1>

                    <h2>Callout</h2>
                    <Callout closeButton>
                        <h3>This is Callout</h3>
                        {sampleText}
                    </Callout>

                    <h2>Code Block</h2>
                    <Code lang="json">{codeBlock}</Code>

                    <h1>
                        Heading 1 <small>Small</small> {sampleText}
                    </h1>
                    <p>{sampleText}</p>
                    <h2>
                        Heading 2 <small>Small</small> {sampleText}
                    </h2>
                    <p>{sampleText}</p>
                    <h3>
                        Heading 3 <small>Small</small> {sampleText}
                    </h3>
                    <p>{sampleText}</p>
                    <h4>
                        Heading 4 <small>Small</small> {sampleText}
                    </h4>
                    <p>{sampleText}</p>
                    <h5>
                        Heading 5 <small>Small</small> {sampleText}
                    </h5>
                    <p>{sampleText}</p>
                    <h6>
                        Heading 6 <small>Small</small> {sampleText}
                    </h6>
                    <p>{sampleText}</p>

                    <hr />

                    <h1>Typo</h1>

                    <h2>Text and Link</h2>
                    <p>
                        {sampleText} <Link to="/link">Link</Link>
                    </p>

                    <h2>Abbreviation</h2>
                    <p>
                        In my dream last night, I saw
                        <abbr title="John Ronald Reuel">J. R. R.</abbr> Tolkien
                        and George <abbr title="Raymond Richard">R. R.</abbr>
                        Martin hanging out on Sunset
                        <abbr title="Boulevard">Blvd</abbr>.
                    </p>

                    <h2>Code</h2>
                    <p>
                        Remember to escape angle brackets when printing HTML:
                        <code>&lt;div&gt;</code>
                    </p>
                    <code data-lang="json">{codeBlock}</code>
                    <p>
                        Press <kbd>Cmd+Q</kbd> (or <kbd>Ctrl+Q</kbd> on Windows)
                        to play Half-Life 3.
                    </p>

                    <hr />

                    <h1>List</h1>
                    <h2>Unordered Lists</h2>
                    <ul>
                        <li>{sampleText} </li>
                        <li>List item</li>
                        <li>
                            List item
                            <ul>
                                <li>{sampleText}</li>
                                <li>Nested list item</li>
                                <li>Nested list item</li>
                            </ul>
                        </li>
                        <li>
                            List item
                            <ul className="no-bullet">
                                <li>{sampleText}</li>
                                <li>Nested list item</li>
                                <li>Nested list item</li>
                            </ul>
                        </li>
                        <li>List item</li>
                        <li>List item</li>
                    </ul>

                    <h2>Ordered Lists</h2>
                    <ol>
                        <li>{sampleText}</li>
                        <li>Pepperoni</li>
                        <li>
                            Bacon
                            <ol>
                                <li>{sampleText}</li>
                                <li>Canadian bacon</li>
                            </ol>
                        </li>
                        <li>Sausage</li>
                        <li>Onions</li>
                        <li>Mushrooms</li>
                    </ol>

                    <h2>Definition Lists</h2>
                    <dl>
                        <dt>Time</dt>
                        <dd>{sampleText}</dd>
                        <dt>Space</dt>
                        <dd>{sampleText}</dd>
                        <dd>{sampleText}</dd>
                    </dl>

                    <h1>Blockquotes</h1>
                    <blockquote>
                        {sampleText}
                        <cite>Isaac Asimov</cite>
                    </blockquote>
                </Column>
            </Row>
        </main>
    )
}
export default Typography
