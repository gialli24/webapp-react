export default function AppFooter() {
    return (
        <footer className="py-4 mt-5 bg-light">
            <div className="container text-center">
                <p className="text-muted mb-0">
                    &copy; {new Date().getFullYear()} MoviesApp. All rights reserved.
                </p>
            </div>
        </footer>
    )
}