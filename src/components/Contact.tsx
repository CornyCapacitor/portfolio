import Swal from 'sweetalert2'
import './Contact.css'

export const Contact = () => {
  const handleCvClick = () => {
    Swal.fire({
      color: "#fff",
      background: "#111827",
      title: 'Choose language of my CV',
      showConfirmButton: true,
      confirmButtonText: "Polish",
      confirmButtonColor: "#23ceb4",
      showDenyButton: true,
      denyButtonText: "English",
      denyButtonColor: "#2563eb",
    }).then((result) => {
      if (result.isConfirmed) {
        // Polish SV
        const link = document.createElement('a');
        link.href = 'CV-pl.pdf'
        link.setAttribute('download', 'CV-pl.pdf')
        document.body.appendChild(link)
        link.click();
        document.body.removeChild(link);
      } else if (result.isDenied) {
        // English CV
        const link = document.createElement('a');
        link.href = 'CV-en.pdf'
        link.setAttribute('download', 'CV-en.pdf')
        document.body.appendChild(link)
        link.click();
        document.body.removeChild(link);
      }
    })
  }

  return (
    <div className="contact">
      <h1>Contact me via:</h1>
      <div className="contact-sources">
        <a href="https://github.com/CornyCapacitor" target="_blank">
          <img style={{ backgroundColor: "transparent" }} src="github-icon.svg" className="contact-icon" />
        </a>
        <a href="https://www.linkedin.com/in/mateusz-minder-b19303257/" target="_blank">
          <img src="linkedin-icon.svg" className="contact-icon" />
        </a>
        <img src="cv-file-icon.svg" className="contact-icon" onClick={() => handleCvClick()} />
      </div>
    </div>
  )
}