# A Birthday in Bloom

A personalized, static birthday greeting website with botanical and science-inspired details. It runs without a backend and can be published directly with GitHub Pages.

## Project files

```text
index.html
style.css
script.js
images/
  photo1.jpg
  photo2.jpg
  photo3.jpg
  photo4.jpg
  photo5.jpg
  photo6.jpg
  birthday-qr.png
```

The `images` folder is where your own photos and QR code go. The page shows friendly placeholders until you add them; no personal photos are included.

## Personalize the page

1. Open `index.html` and search for `[HER NAME]`. Replace it with her name in the opening greeting and letter salutation.
2. Replace `[INSERT YOUR PERSONALIZED BIRTHDAY MESSAGE HERE]` and the sample closing paragraph with your own birthday letter.
3. Add your photos to an `images` folder beside `index.html`, named `photo1.jpg` through `photo6.jpg`. Or change each gallery image's `src` in `index.html` to match your filenames. Update its `alt` text and caption at the same time.
4. To add a photo, duplicate one `<figure class="memory-item">` in the gallery and update its image path, alt text, number, and caption.
5. Replace `images/birthday-qr.png` with your QR image. Update the two bracketed QR messages with a hint and scanning instructions. The code the QR points to can be a private playlist, video, letter, or other surprise.
6. The optional sound button creates a quiet ambient chord only after it is clicked. It does not autoplay.

Use the browser to open `index.html` while editing. A local web server is not required for this static page.

## Publish with GitHub Pages

1. Sign in to [GitHub](https://github.com) and create a new repository. Choose a name such as `birthday-surprise`. A public repository is the simplest option for GitHub Pages on a free plan. Do not add a README during repository creation if you plan to upload this existing project as-is.
2. In the new repository, choose **Add file → Upload files** and upload `index.html`, `style.css`, `script.js`, `README.md`, and your `images` folder with its contents. Keep the folder and filenames exactly aligned with the image paths in the HTML.
3. Commit the uploaded files to the repository's `main` branch.
4. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**. Select the `main` branch and the `/(root)` folder, then click **Save**.
5. Wait for the Pages deployment to finish. The Pages settings will show the published URL, usually `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.
6. Open that URL on a phone as well as a computer to check the gallery, QR code, and layout. After later edits, commit them to `main`; Pages will publish the update automatically.

If you use a private repository, check that your GitHub plan supports publishing Pages from it before sharing the site.