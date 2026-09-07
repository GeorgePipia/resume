# George Pipia resume

Public site: https://george-pipia-resume.netlify.app/

Owner editor: https://george-pipia-resume.netlify.app/admin

## Editing

Sign in with the owner's Netlify Identity account. If needed, use **Send password reset email** and open the newest email link. The site handles recovery, confirmation and invitation links automatically. A recovery link displays a new-password form.

Edit the profile fields, use **Add entry** or **Add section**, and select **Save changes**. Removing entries is published only when you save.

For a portrait, choose a JPG, PNG or WebP from your device, click **Upload photo**, adjust horizontal position, vertical position and zoom, then **Save changes**. Selecting a file and clicking **Save changes** also uploads and publishes it in one step. Photos are resized in the browser. HEIC files should be exported as JPG first.

Resume changes and photos are stored in site-scoped Netlify Blobs, so they persist across deployments. The public page reads that same data. Anonymous visitors cannot save changes or upload photos. The public page shows the edit link only for the authenticated owner.

## Deployment

Netlify builds the GitHub `main` branch with `pnpm run build` and the Next.js runtime. Runtime APIs are Next.js routes under `app/api`; do not add duplicate Netlify Functions for the same paths or a static `public/admin.html` file.

The QR code in `public/resume-qr.svg` links to the public Netlify URL. Regenerate it if the domain changes.

Run `pnpm run build` to check production compilation and types. Authentication and storage integration must also be verified on Netlify. Keep credentials out of this repository.

