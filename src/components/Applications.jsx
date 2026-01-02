import applications from "../data/applications"
import ApplicationCard from "./ApplicationCard"

function Applications() {
  return (
    <section id="applications" className="px-8 py-16">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
        Applications
      </h2>

      <div className="grid gap-8 md:grid-cols-4">
        {applications.map((app) => (
          <ApplicationCard key={app.id} application={app} />
        ))}
      </div>
    </section>
  )
}

export default Applications
