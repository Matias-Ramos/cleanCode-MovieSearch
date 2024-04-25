const Loading = ({ isLoading }: { isLoading: boolean }) => (
  isLoading
    ? <div className="text-3xl">Loading...</div>
    : null
)

export default Loading;