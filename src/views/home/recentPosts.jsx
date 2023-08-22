import "../home.css";
import Post from "./post";
export default function RecentPosts() {
  return (
    <div className='container-recent-post'>
      <Post
        title='Mengatasi Storage Penuh Saat Proses Build Docker'
        date='28 Jul 2023'
        tags='Nextjs, Deploy, Docker, Nodejs'
        postUrl='https://medium.com/@scriptgalih/mengatasi-storage-penuh-saat-proses-build-docker-1f03662a3865'
        content='Storage penuh merupakan masalah yang sering ditemukan oleh seorang developer ketika sedang men-deploy aplikasinya ke server, terlebih jika memang sering melakukan pembaharuan menggunakan docker. Penyebab storage penuh Terdapat beberapa penyebab, diantaranya:'
      />
      <Post
        title='Deploy Next.JS Pada Docker Dengan Multi Stage'
        date='27 Jul 2023'
        tags='Nextjs, Deploy, Docker, Nodejs'
        postUrl='https://medium.com/@scriptgalih/deploy-next-js-pada-docker-dengan-multi-stage-c20b8c5d3e31'
        content='Artikel ini berisi rangkuman dari beberapa forum dan artikel terkait dengan cara mendeploy Next JS dengan menggunakan docker. Di artikel ini akan disajikan 2 cara mendeploy, dengan cara sederhana dan multi stage.'
      />
      <Post
        title='OTW'
        date='12 Feb 2020'
        tags='Design, Pattern'
        content='ya otw tunggu aja lagi gak mood nulis wkwk'
      />
    </div>
  );
}
