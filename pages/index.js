import { useRouter } from "next/router";
//imports components
import Barra from "components/layout/Barra";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="seccion-principal">
        <Barra />
        <main>
          <div className="container">
            <h2>Escoja una opcion</h2>

            <div className="row">
              <div className="d-flex justify-content-center justify-content-sm-end mb-3 col-12 col-sm-6">
                <a href="/monitores">
                  <button type="button" className="btn btn-primary w-100 fs-4">
                    Monitores
                  </button>
                </a>
              </div>

              <div className="d-flex justify-content-center justify-content-sm-start mb-3 col-12 col-sm-6">
                <a href="/monitorias">
                  <button type="button" className="btn btn-primary w-100 fs-4">
                    Monitorias
                  </button>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
