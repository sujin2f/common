import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'
import { Column } from 'src/common/components/layout/Column'
import { Row } from 'src/common/components/layout/Row'
import { ArticleHeader } from 'src/frontend/components/ArticleHeader'

const codeBlock = `{
    "What I am": "I am a big chunk of code. I can have very long lines, I will not break and show a scrollbar instead.",
    ...
}`

const Typography = (): JSX.Element => {
    return (
        <Fragment>
            <ArticleHeader title="Typography" description="description" />
            <Row dom="main">
                <Column dom="article" small={12} medium={8} mediumOffset={2}>
                    <h1>
                        Heading 1 <small>Small</small>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <h2>
                        Heading 2 <small>Small</small>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <h3>
                        Heading 3 <small>Small</small>
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <h4>
                        Heading 4 <small>Small</small>
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <h5>
                        Heading 5 <small>Small</small>
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <h6>
                        Heading 6 <small>Small</small>
                    </h6>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                    <hr />

                    <h1>Typo</h1>
                    <h2>Lead Text</h2>
                    <p className="lead">
                        What are your cats <em>really</em> dreaming about while
                        they sleep?
                    </p>

                    <h2>Text and Link</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum. <Link to="/link">Link</Link>
                    </p>

                    <h2>Abbreviation</h2>
                    <p>
                        In my dream last night, I saw{' '}
                        <abbr title="John Ronald Reuel">J. R. R.</abbr> Tolkien
                        and George <abbr title="Raymond Richard">R. R.</abbr>{' '}
                        Martin hanging out on Sunset{' '}
                        <abbr title="Boulevard">Blvd</abbr>.
                    </p>

                    <h2>Code</h2>
                    <p>
                        Remember to escape angle brackets when printing HTML:{' '}
                        <code>&lt;div&gt;</code>
                    </p>
                    <p>
                        <span className="code-inline">
                            I am not code, but I am displayed as if.
                        </span>
                    </p>
                    <code className="code-block">{codeBlock}</code>
                    <p>
                        Press <kbd>Cmd+Q</kbd> (or <kbd>Ctrl+Q</kbd> on Windows)
                        to play Half-Life 3.
                    </p>

                    <hr />

                    <h1>List</h1>
                    <h2>Unordered Lists</h2>
                    <ul>
                        <li>
                            List item with a much longer description or more
                            content.
                        </li>
                        <li>List item</li>
                        <li>
                            List item
                            <ul>
                                <li>Nested list item</li>
                                <li>Nested list item</li>
                                <li>Nested list item</li>
                            </ul>
                        </li>
                        <li>
                            List item
                            <ul className="no-bullet">
                                <li>Nested list item</li>
                                <li>Nested list item</li>
                                <li>Nested list item</li>
                            </ul>
                        </li>
                        <li>List item</li>
                        <li>List item</li>
                    </ul>

                    <h2>Ordered Lists</h2>
                    <ol>
                        <li>Cheese (essential)</li>
                        <li>Pepperoni</li>
                        <li>
                            Bacon
                            <ol>
                                <li>Normal bacon</li>
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
                        <dd>
                            The indefinite continued progress of existence and
                            events in the past, present, and future regarded as
                            a whole.
                        </dd>
                        <dt>Space</dt>
                        <dd>
                            A continuous area or expanse that is free,
                            available, or unoccupied.
                        </dd>
                        <dd>
                            The dimensions of height, depth, and width within
                            which all things exist and move.
                        </dd>
                    </dl>

                    <h1>Blockquotes</h1>
                    <blockquote>
                        Those people who think they know everything are a great
                        annoyance to those of us who do.
                        <cite>Isaac Asimov</cite>
                    </blockquote>
                </Column>
            </Row>
        </Fragment>
    )
}
export default Typography
