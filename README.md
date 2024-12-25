# Directory Structure

```
/
├── /blog
│   ├── /categories
│   │   └── /[category]
│   ├── /tags
│   │   └── /[tag]
│   ├── /archive
│   │   ├── /[year]
│   │   └── /[year]/[month]
│   ├── /authors
│   │   └── /[author]
│   │       └── /[slug]
│   ├── /search
│   ├── /subscribe
│   ├── /premium
│   │   └── /[slug]
│   ├── /[slug]
├── /api
│   ├── /posts
│   │   └── /[postId]
│   ├── /categories
│   │   └── /[categoryId]
│   ├── /tags
│   │   └── /[tagId]
│   ├── /authors
│   │   └── /[authorId]
│   ├── /search
│   ├── /comments
│   └── /subscribe
├── /sitemap.xml
├── /robots.txt
└── /user
    ├── /login
    ├── /register
    ├── /dashboard
    └── /profile
        └── /[username]

```

# Semantic webpage blog
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Your ultimate guide to SEO, digital marketing, and content creation.">
    <title>SEO Blog - Your Ultimate Guide to SEO</title>
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/styles.css">
</head>

<body>

    <!-- Header Section -->
    <header id="header" role="banner">
        <nav id="main-navigation" role="navigation" aria-label="Main Navigation">
            <h1>SEO Blog</h1>
            <ul>
                <li><a href="/" title="Home">Home</a></li>
                <li><a href="/about" title="About Us">About Us</a></li>
                <li><a href="/contact" title="Contact Us">Contact</a></li>
                <li><a href="/blog" title="Blog Posts">Blog</a></li>
                <li><a href="/blog/categories" title="Categories">Categories</a></li>
                <li><a href="/blog/tags" title="Tags">Tags</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main Content Section -->
    <main id="main-content" role="main">
        <!-- Article Section -->
        <article id="article">
            <header>
                <h2>Understanding SEO Basics: A Comprehensive Guide</h2>
                <p><strong>Author:</strong> John Doe | <time datetime="2024-12-25">December 25, 2024</time></p>
            </header>

            <section>
                <h3>What is SEO?</h3>
                <p>SEO, or Search Engine Optimization, is the practice of improving your website's visibility in search engine results. It involves a variety of strategies and techniques...</p>
            </section>

            <section>
                <h3>Why is SEO Important?</h3>
                <p>SEO helps your website rank higher on search engines like Google, leading to more organic traffic, which increases brand awareness and leads to conversions...</p>
            </section>

            <footer>
                <p>Read more on <a href="/blog/advanced-seo-techniques">advanced SEO techniques</a>.</p>
            </footer>
        </article>

        <!-- Sidebar Section -->
        <aside id="sidebar" role="complementary">
            <section aria-labelledby="search-widget">
                <h2 id="search-widget">Search</h2>
                <form action="/blog/search" method="get" aria-labelledby="search-widget">
                    <label for="search-input" class="visually-hidden">Search blog posts</label>
                    <input type="text" id="search-input" name="query" placeholder="Search..." aria-label="Search blog posts" required>
                    <button type="submit">Search</button>
                </form>
            </section>

            <section aria-labelledby="popular-posts-widget">
                <h2 id="popular-posts-widget">Popular Posts</h2>
                <nav aria-labelledby="popular-posts-widget">
                    <ul>
                        <li><a href="/blog/seo-basics">SEO Basics for Beginners</a></li>
                        <li><a href="/blog/advanced-seo-techniques">Advanced SEO Techniques</a></li>
                        <li><a href="/blog/how-to-rank">How to Rank in Google in 2024</a></li>
                    </ul>
                </nav>
            </section>

            <section aria-labelledby="categories-widget">
                <h2 id="categories-widget">Categories</h2>
                <nav aria-labelledby="categories-widget">
                    <ul>
                        <li><a href="/blog/categories/seo">SEO</a></li>
                        <li><a href="/blog/categories/content-marketing">Content Marketing</a></li>
                        <li><a href="/blog/categories/social-media">Social Media</a></li>
                    </ul>
                </nav>
            </section>

            <section aria-labelledby="newsletter-widget">
                <h2 id="newsletter-widget">Subscribe to Our Newsletter</h2>
                <p>Get the latest SEO tips and strategies delivered to your inbox.</p>
                <form action="/api/subscribe" method="POST" aria-labelledby="newsletter-widget">
                    <label for="email-input" class="visually-hidden">Enter your email address to subscribe</label>
                    <input type="email" id="email-input" name="email" placeholder="Your email address" aria-label="Email address" required>
                    <button type="submit">Subscribe</button>
                </form>
            </section>
        </aside>
    </main>

    <!-- Footer Section -->
    <footer id="footer" role="contentinfo">
        <section aria-labelledby="footer-contact">
            <h2 id="footer-contact">Contact Us</h2>
            <p>Email us at: <a href="mailto:contact@seoblog.com">contact@seoblog.com</a></p>
        </section>

        <section aria-labelledby="footer-social">
            <h2 id="footer-social">Follow Us</h2>
            <ul>
                <li><a href="https://facebook.com/seoblog" target="_blank" title="Facebook">Facebook</a></li>
                <li><a href="https://twitter.com/seoblog" target="_blank" title="Twitter">Twitter</a></li>
                <li><a href="https://instagram.com/seoblog" target="_blank" title="Instagram">Instagram</a></li>
            </ul>
        </section>

        <section aria-labelledby="footer-legal">
            <h2 id="footer-legal">Legal</h2>
            <ul>
                <li><a href="/privacy-policy" title="Privacy Policy">Privacy Policy</a></li>
                <li><a href="/terms-of-service" title="Terms of Service">Terms of Service</a></li>
            </ul>
        </section>

        <p>&copy; 2024 SEO Blog. All rights reserved.</p>
    </footer>

</body>

</html>
```
# Semantic HTML for list blog list

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Explore the latest articles on SEO, digital marketing, and content creation.">
    <title>Latest Blog Posts - SEO Blog</title>
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="/styles.css">
</head>

<body>

    <!-- Header Section -->
    <header id="header" role="banner">
        <nav id="main-navigation" role="navigation" aria-label="Main Navigation">
            <h1>SEO Blog</h1>
            <ul>
                <li><a href="/" title="Home">Home</a></li>
                <li><a href="/about" title="About Us">About Us</a></li>
                <li><a href="/contact" title="Contact Us">Contact</a></li>
                <li><a href="/blog" title="Blog Posts">Blog</a></li>
            </ul>
        </nav>
    </header>

    <!-- Main Content Section -->
    <main id="main-content" role="main">
        <h2>Latest Blog Posts</h2>

        <!-- Blog List Section -->
        <section id="blog-list" aria-labelledby="blog-list-heading">
            <h3 id="blog-list-heading" class="visually-hidden">Blog Posts</h3>

            <ul>
                <li>
                    <article class="blog-post" aria-labelledby="post-1">
                        <header>
                            <h2 id="post-1"><a href="/blog/seo-basics-for-beginners" title="Read SEO Basics for Beginners">SEO Basics for Beginners</a></h2>
                            <p class="meta">
                                <time datetime="2024-12-20">December 20, 2024</time> | 
                                <span>By <a href="/author/john-doe" title="John Doe's Profile">John Doe</a></span>
                            </p>
                        </header>
                        <section>
                            <p>Learn the fundamental concepts of SEO and how to apply them to your website for better rankings on search engines.</p>
                        </section>
                        <footer>
                            <a href="/blog/seo-basics-for-beginners" class="read-more" title="Read full article">Read More</a>
                        </footer>
                    </article>
                </li>

                <li>
                    <article class="blog-post" aria-labelledby="post-2">
                        <header>
                            <h2 id="post-2"><a href="/blog/advanced-seo-strategies" title="Read Advanced SEO Strategies">Advanced SEO Strategies</a></h2>
                            <p class="meta">
                                <time datetime="2024-12-18">December 18, 2024</time> | 
                                <span>By <a href="/author/jane-doe" title="Jane Doe's Profile">Jane Doe</a></span>
                            </p>
                        </header>
                        <section>
                            <p>Discover advanced techniques and strategies to enhance your SEO and drive more organic traffic to your site.</p>
                        </section>
                        <footer>
                            <a href="/blog/advanced-seo-strategies" class="read-more" title="Read full article">Read More</a>
                        </footer>
                    </article>
                </li>

                <li>
                    <article class="blog-post" aria-labelledby="post-3">
                        <header>
                            <h2 id="post-3"><a href="/blog/content-marketing-for-seo" title="Read Content Marketing for SEO">Content Marketing for SEO</a></h2>
                            <p class="meta">
                                <time datetime="2024-12-15">December 15, 2024</time> | 
                                <span>By <a href="/author/john-doe" title="John Doe's Profile">John Doe</a></span>
                            </p>
                        </header>
                        <section>
                            <p>Explore how content marketing plays a vital role in boosting SEO and increasing visibility online.</p>
                        </section>
                        <footer>
                            <a href="/blog/content-marketing-for-seo" class="read-more" title="Read full article">Read More</a>
                        </footer>
                    </article>
                </li>

            </ul>
        </section>
    </main>

    <!-- Footer Section -->
    <footer id="footer" role="contentinfo">
        <section aria-labelledby="footer-contact">
            <h2 id="footer-contact">Contact Us</h2>
            <p>Email us at: <a href="mailto:contact@seoblog.com">contact@seoblog.com</a></p>
        </section>

        <section aria-labelledby="footer-social">
            <h2 id="footer-social">Follow Us</h2>
            <ul>
                <li><a href="https://facebook.com/seoblog" target="_blank" title="Facebook">Facebook</a></li>
                <li><a href="https://twitter.com/seoblog" target="_blank" title="Twitter">Twitter</a></li>
                <li><a href="https://instagram.com/seoblog" target="_blank" title="Instagram">Instagram</a></li>
            </ul>
        </section>

        <section aria-labelledby="footer-legal">
            <h2 id="footer-legal">Legal</h2>
            <ul>
                <li><a href="/privacy-policy" title="Privacy Policy">Privacy Policy</a></li>
                <li><a href="/terms-of-service" title="Terms of Service">Terms of Service</a></li>
            </ul>
        </section>

        <p>&copy; 2024 SEO Blog. All rights reserved.</p>
    </footer>

</body>

</html>

```